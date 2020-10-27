class IdentitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name,
   :description,
    :total_days,
     :successful_days,
      :standard,
       :user_id,
        :category_id,
         :consistency,
          :image,
           :id,
            :days_left_in_week,
             :disabled_boxes
             
  belongs_to :category
end
