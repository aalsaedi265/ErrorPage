
puts "clearing out"

User.destroy_all
Catagory.destroy_all
Issue.destroy_all

puts 'forge user'

q = User.create(name:'Glen Qagmire') #the fun loving piolt
c = User.create(name: 'Charlie Sheen')#the man of two and half man
s = User.create(name: 'Solider Boy') #hero of heros

puts 'forge catagory'

body = Catagory.create(title:'body')
money = Catagory.create(title:'money')

puts 'forge issue'

Issue.create(comment:'my dick is stuck in the window again', user_id: q.id, catagory_id: body.id)
Issue.create(comment:'my courtesan is having a mental break down, how do i get reimbursement?', user_id: c.id, catagory_id: money.id )
Issue.create(comment:'how many things can go up the rectum of female', user_id: s.id, catagory_id: body.id)

puts 'atomic finish'