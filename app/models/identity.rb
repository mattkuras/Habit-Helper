class Identity < ApplicationRecord
    belongs_to :user
    belongs_to :category

    def consistency
        if total_days && successful_days != nil
            return 0 unless total_days.positive?
            consistency = ((successful_days * 100) / total_days)
        else 
            total_days && successful_days = 0
        end 
    end


    def days_left_in_week
        days_before = (Date.today.wday + 5) % 7 + 1
        monday = (Date.today.to_date - days_before)
        old_date = Date.parse(monday.to_s)
        new_date = Date.parse(Date.today.to_s)
        days_since_monday = (new_date - old_date).to_i
        days_left_in_week = 7 - days_since_monday
    end

    def disabled_boxes 
        if self.days_left_in_week < self.standard
            disabled_boxes = self.standard - self.days_left_in_week
        else
            disabled_boxes = 0
        end
    end

    def total_days 
        old_date = Date.parse(self.created_at.to_s)
        new_date = Date.parse(Date.today.to_s)
        days_since_created = (new_date - old_date).to_i
    end

    def image 
        cat = Category.where(id: self.category_id ).first
        cat.image
    end
end
