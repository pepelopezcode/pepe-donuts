require 'faker'
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all   
Donut.destroy_all
DonutShop.destroy_all 
Review.destroy_all

user1 = User.create(username: 'HairyPoppins', email: "1231@gmail.com", password_digest: '12345678', image_url: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png')
user2 = User.create(username: 'fluffycookie ', email: "1232@gmail.com", password_digest: '12345678', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxizVEW0-O-O42lvNwOenbn8jtTiYpyUtNvQ&usqp=CAU')
user3 = User.create(username: 'averagestudent', email: "1233@gmail.com", password_digest: '12345678', image_url: 'https://www.publicdomainpictures.net/pictures/120000/nahled/avatar-icon.jpg')
user4 = User.create(username: 'shaquille.oatmeal', email: "1234@gmail.com", password_digest: '12345678', image_url: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png')
user5 = User.create(username: 'YellowSnowman', email: "1235@gmail.com", password_digest: '12345678', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU')
user6 = User.create(username: 'anonymouse', email: "1236@gmail.com", password_digest: '12345678', image_url: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80')

donut_shop1 = DonutShop.create(name: 'The Donut Stop')




donut_shop2 = DonutShop.create(name: 'DoDoDonuts')





donut_shop3 = DonutShop.create(name: 'Not Yo Donuts')


donut1 = Donut.create(name: 'glazed', image_url: 'https://www.jocooks.com/wp-content/uploads/2021/05/glazed-donuts-1-2.jpg', description: "These fried doughnuts are of Italian origin. Their texture can either be fluffy or dense, depending on what type of dough they're made with. They're often topped with a sprinkle of powdered sugar.", donut_shop_id: donut_shop1.id)
donut2 = Donut.create(name: 'jelly', image_url: 'https://www.mashed.com/img/gallery/easy-jelly-filled-donut-recipe/l-intro-1624385758.jpg', description: 'A jam doughnut or jelly donut, is a doughnut filled with jam filling. Varieties include Polish Pączki, German Berliner, sufganiyot in Israel, jam-filled doughnuts (in Australia, Britain, New Zealand and Nigeria), and jelly-filled doughnuts (in the United States and Canada)', donut_shop_id: donut_shop2.id)
donut3 = Donut.create(name: 'chocolate bar', image_url: 'https://www.nwcoffeesupply.com/wp-content/uploads/2020/06/Marsee-Baking-Chocolate-Bar.jpg', description: 'A chocolate donut is a fried bread-based confection that is either made with, topped with, or filled with chocolate. Donuts and donut-style desserts are popular in many countries around the world.', donut_shop_id: donut_shop3.id)
donut4 = Donut.create(name: 'maple bar', image_url: 'https://thefoodcharlatan.com/wp-content/uploads/2022/01/Maple-Donut-Recipe-Maple-Bars-14.jpg', description: 'A maple bar is a rectangular doughnut topped with a maple glaze. They can be filled with custard, or cream, or left unfilled. Maple bars are prominent on the West coast of the United States. Maple bars are also known as a maple-glazed Long John, Maple-Creamstick or maple Bismarck', donut_shop_id: donut_shop1.id)
donut5 = Donut.create(name: 'sugar', image_url: 'https://www.christinascucina.com/wp-content/uploads/2014/01/IMG_4471.jpg', description: 'Simple Sugar Donuts - The dough is made with flour, water, yeast and sugar, then the donuts are fried and dredged in sugar.', donut_shop_id: donut_shop2.id)
donut6 = Donut.create(name: 'glazed twist', image_url: '', description: 'A glaze twist is a  small ring-shaped cake made of rich, light dough that is fried in deep fat. Something whose form is reminiscent of a ring-shaped cake.', donut_shop_id: donut_shop3.id)
donut7 = Donut.create(name: 'chocolate sprinkle', image_url: 'https://www.justataste.com/wp-content/uploads/2014/03/glazed-doughnut-holes-recipe.jpg', description: 'these Chocolate Sprinkle  are a more traditional soft and pillowy yeasted donut that is deep fried and then covered in chocolate glaze and sprinkles', donut_shop_id: donut_shop1.id)
donut8 = Donut.create(name: 'vanilla sprinkle', image_url: 'https://sallysbakingaddiction.com/wp-content/uploads/2014/01/Baked-Funfetti-Donuts.-These-taste-just-like-your-favorite-sprinkled-donuts-at-the-bakery.-And-theyre-so-simple-to-make-at-home-4.jpg', description: 'Vanilla sprinkle donuts are double dipped in vanilla glaze, topped with sprinkles, and simple to make. It’s a very thick batter that produces tight-crumbed, cakey donuts.', donut_shop_id: donut_shop2.id)
donut9 = Donut.create(name: 'donut holes', image_url: 'https://reschbakery.com/wp-content/uploads/2016/10/Glazed-Donut-Holes.jpg', description: 'Donut holes (spelled as doughnut in England and Commonwealth countries) are small, bite-sized donuts that were traditionally made from the dough taken from the center of ring donuts. The “holes” are deep-fried just like regular donuts. They are then glazed with sugar, or dusted with fine sugar or powdered sugar.', donut_shop_id: donut_shop3.id)
donut10 = Donut.create(name: 'old fasioned', image_url: 'https://www.dawnfoods.com/images/default-source/usa-recipes/2508-heroimage1.png?Status=Master&sfvrsn=2b608b9e_0', description: "The old-fashioned doughnut is the jolie laide ring of dough that's cousin to the cake doughnut. It's risen with a chemical leavener and made into either batter or dough. It's fried at a lower temperature than other doughnuts, thereby creating a craggy, rough-edged specimen", donut_shop_id: donut_shop1.id)
donut11 = Donut.create(name: 'bear claw', image_url: 'https://live.staticflickr.com/4394/36248158361_3b487af157_b.jpg', description: "A bear claw is usually filled with almond paste, and sometimes raisins, and often shaped in a semicircle with slices along the curved edge, or rectangular with partial slices along one side. As the dough rises, the sections separate, evoking the shape of a bear's toes, hence the name.", donut_shop_id: donut_shop2.id)
donut12 = Donut.create(name: 'suagr twist', image_url: 'https://media.istockphoto.com/photos/twisted-bread-donuts-picture-id635746446?k=20&m=635746446&s=170667a&w=0&h=UGH0Plg8kSix5OjISpBPjAYbeQSlXNENtg5Idu1W4HA=', description: 'A sugar twist is a  small ring-shaped cake made of rich, light dough that is fried in deep fat. Something whose form is reminiscent of a ring-shaped cake.', donut_shop_id: donut_shop1.id)
donut13 = Donut.create(name: 'hot chocolate', image_url: 'https://www.momables.com/wp-content/uploads/2020/11/hot-chocolate-with-chips_RC.jpg', description: "Hot cocoa is a hot, sweet drink made from cocoa powder, sugar, and milk. Cocoa powder is derived from cocoa beans, which are dried, fermented, then roasted at a high temperature to sweeten the flavor.", donut_shop_id: donut_shop1.id)
donut14 = Donut.create(name: 'coffee', image_url: 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/w_800', description: "Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans, primarily due to its caffeine content. It is one of the most popular drinks in the world and can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee)", donut_shop_id: donut_shop3.id)


review1 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, rating: rand(1..10), donut_shop_id: donut_shop1.id, user_id: user1.id)
review2 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, rating: rand(1..10), donut_shop_id: donut_shop2.id, user_id: user2.id)
review3 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, rating: rand(1..10), donut_shop_id: donut_shop3.id, user_id: user3.id)
review4 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, rating: rand(1..10), donut_shop_id: donut_shop1.id, user_id: user4.id)
review5 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, rating: rand(1..10), donut_shop_id: donut_shop2.id, user_id: user5.id)
review6 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, rating: rand(1..10), donut_shop_id: donut_shop3.id, user_id: user6.id)
review7 = Review.create(comment: Faker::Quotes::Shakespeare.hamlet_quote, rating: rand(1..10), donut_shop_id: donut_shop1.id, user_id: user1.id)