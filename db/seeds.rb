# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([
    # { name: 'Star Wars' }, 
    # { name: 'Lord of the Rings' }
    # ])
#   Character.create(name: 'Luke', movie: movies.first)



categories = Category.create([
    {name: "Meditation", image: 'https://skepticmeditations.com/wp-content/uploads/2017/08/meditator-clipart-min-e1503189823700.jpg'},
    {name: "Music", image: 'https://s.clipartkey.com/mpngs/s/4-42032_music-free-jokingart-com-transparent-background-music-notes.png'},
    {name: "Fitness", image: 'https://www.kindpng.com/picc/m/260-2600650_transparent-man-standing-silhouette-png-person-with-dumbbell.png'},
    {name: "Health"},
    {name: "Photography", image: 'https://library.kissclipart.com/20180831/eqw/kissclipart-clip-art-photographer-clipart-photography-clip-art-550ffd755bd9f5aa.jpg'},
    {name: "Web Development", image: 'https://p7.hiclipart.com/preview/677/439/740/web-development-php-software-developer-programmer-web-design-computer-user-icon-svg.jpg'},
    {name: "Writing", image: 'https://cdn.clipart.email/5a4d50fe0376ed193f83b44ecbf9074b_writer-silhouette-transparent-png-clipart-free-download-ywd_1200-952.jpeg'},
    {name: "Reading"},
    {name: "Social"},
    {name: "Cooking"},
    {name: "Surfing"},
    {name: "Blogging"},
    {name: "Art"},
    {name: "Working"},
    {name: "Running"},
    {name: "Drawing"},
    {name: "Gardening"},
    {name: "Parenting"},
    {name: "Traveling"},
    {name: "Creating"},
    {name: "Skiing"},
    {name: "Singing"},
    {name: "Comedy"},
    {name: "Entertaining"},
    {name: "Podcasting"},
    {name: "Filmmaking"},
    {name: "Science"},
])

identities = Identity.create([
    { 
      name: "Meditator",
      description: "",
      days: 20,
      successful_days: 19,
      category_id: 1,
      standard: 7,
      user_id: 1
    },
      
    {   name: "Guitarist",
        description: "",
        days: 20,
        successful_days: 15,
        category_id: 2,
        standard: 7,
        user_id: 1
    },
    {   
        name: "Developer",
        description: "",
        days: 20,
        successful_days: 16,
        category_id: 6,
        standard: 5,
        user_id: 1
    },
    {   
        name: "Photographer",
        description: "",
        days: 6,
        successful_days: 6,
        category_id: 5,
        standard: 2,
        user_id: 1
    },
    {   
        name: "Writer",
        description: "",
        days: 9,
        successful_days: 6,
        category_id: 7,
        standard: 3,
        user_id: 1
    },
    {   
        name: "Athlete",
        description: "",
        days: 15,
        successful_days: 11,
        category_id: 3,
        standard: 5,
        user_id: 1
    },
])