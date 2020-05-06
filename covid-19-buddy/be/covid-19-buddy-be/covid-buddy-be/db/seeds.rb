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
#t.string "bio"
#t.string "pronouns"
#t.string "gender"
#t.string "profileimg"

#t.boolean :suicidal_urges_boolean,
#t.boolean :sib_urges_boolean
#
#t.integer :sadness_level
#t.integer :happiness_level
#t.integer :anxiety_level
#t.integer :anger_level
#t.integer :dysphoria_level
#t.integer :ed_level
#
#t.boolean :used_skills_boolean
#t.string :mood
#t.string :details
#t.string :skills
User.destroy_all
Entry.destroy_all

u1 = User.create_or_find_by(username: 'boostinwrx', firstname: 'Tiffany', lastname: 'Abraham', password: '0123', bio: 'Im a transgender woman who suffers from many mental health
health issues. Im also the creator of this app. I made this app so people can track there mood, use DBT skills, and get the help they need
if theyre in crisis.', pronouns: 'she/her',age: 24, gender: 'F' )

Entry.create_or_find_by(user_id: u1.id ,suicidal_urges_boolean: false,  sib_urges_boolean: false, sadness_level: 2, happiness_level: 7,anxiety_level: 4, anger_level: 1,
                            dysphoria_level: 6,  ed_level: 9, used_skills_boolean: true, mood: 'Happy', details: 'Im coding this application, about to cook dinner.
    Feeling happy, but strong eating disorder urges' , skills: 'Check the FACTS, Opposite action ',)