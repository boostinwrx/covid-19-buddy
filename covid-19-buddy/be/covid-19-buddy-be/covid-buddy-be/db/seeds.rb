# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#t.string "username"
#t.string "firstname"
#t.string "lastname"
#t.string "password_digest"
#t.integer "age"
#t.string "gender"
#t.string "profileimg"
#
#t.float :temp
##t.string :tempunit
##t.string :symptoms
##t.string :med
##t.float :dose
##t.string :doseunit
##t.time :time
##t.date :date
u1 = User.create_or_find_by(username: 'boostinwrx', firstname: 'Tiffany', lastname: 'Abraham', password: '0123', age: 24, gender: 'F' )

Entry.create_or_find_by(user_id: u1.id, temp: 103.5, tempunit: 'F', symptoms: 'fever, cough, fatigue', med: 'Tylenol', dose: 1000, time: Time.current, date: Date.current, doseunit: 'mg' )