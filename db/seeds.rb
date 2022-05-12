require 'faker'
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all   
Donut.destroy_all
DonutShop.destroy_all 
Review.destroy_all

user1 = User.create(name: Faker::Name.name, email: "1231@gmail.com", password_digest: '12345678', image_url: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
user2 = User.create(name: Faker::Name.name, email: "1232@gmail.com", password_digest: '12345678', image_url: 'https://images.unsplash.com/photo-1610795384821-2eed2f416f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')
user3 = User.create(name: Faker::Name.name, email: "1233@gmail.com", password_digest: '12345678', image_url: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
user4 = User.create(name: Faker::Name.name, email: "1234@gmail.com", password_digest: '12345678', image_url: 'https://images.unsplash.com/photo-1533530448489-c12663a612cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
user5 = User.create(name: Faker::Name.name, email: "1235@gmail.com", password_digest: '12345678', image_url: 'https://images.unsplash.com/photo-1623252327694-ca5ed9b6378f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
user6 = User.create(name: Faker::Name.name, email: "1236@gmail.com", password_digest: '12345678', image_url: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80')

donut_shop1 = DonutShop.create(name: 'Davids Donuts')
donut_shop2 = DonutShop.create(name: 'The Donut Stop')
donut_shop3 = DonutShop.create(name: 'Not Yo Donuts')


donut1 = Donut.create!(name: 'glazed', image_url: '', donut_shop_id: donut_shop1.id)
donut2 = Donut.create(name: 'jelly', image_url: '', donut_shop_id: donut_shop1.id)
donut3 = Donut.create(name: 'chocolate bar', image_url: '', donut_shop_id: donut_shop1.id)
donut4 = Donut.create(name: 'maple bar', image_url: '', donut_shop_id: donut_shop1.id)
donut5 = Donut.create(name: 'sugar', image_url: '', donut_shop_id: donut_shop1.id)
donut6 = Donut.create(name: 'glazed twist', image_url: '', donut_shop_id: donut_shop1.id)
donut7 = Donut.create(name: 'chcolate sprinkle', image_url: '', donut_shop_id: donut_shop1.id)
donut8 = Donut.create(name: 'vanilla sprinkle', image_url: '', donut_shop_id: donut_shop1.id)
donut9 = Donut.create(name: 'donut holes', image_url: '', donut_shop_id: donut_shop1.id)
donut10 = Donut.create(name: 'old fasioned', image_url: '', donut_shop_id: donut_shop1.id)
donut11 = Donut.create(name: 'bear claw', image_url: '', donut_shop_id: donut_shop1.id)
donut12 = Donut.create(name: 'suagr twist', image_url: '', donut_shop_id: donut_shop1.id)
donut13 = Donut.create(name: 'hot chocolate', image_url: '', donut_shop_id: donut_shop1.id)
donut14 = Donut.create(name: 'coffee', image_url: '', donut_shop_id: donut_shop1.id)


review1 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, donut_shop_id: donut_shop1.id, user_id: user1.id)
review2 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, donut_shop_id: donut_shop2.id, user_id: user2.id)
review3 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, donut_shop_id: donut_shop3.id, user_id: user3.id)
review4 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, donut_shop_id: donut_shop1.id, user_id: user4.id)
review5 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, donut_shop_id: donut_shop2.id, user_id: user5.id)
review6 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, donut_shop_id: donut_shop3.id, user_id: user6.id)
review7 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, donut_shop_id: donut_shop1.id, user_id: user1.id)