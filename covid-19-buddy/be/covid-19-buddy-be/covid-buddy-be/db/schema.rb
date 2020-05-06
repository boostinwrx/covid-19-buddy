# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_31_183059) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: :cascade do |t|
    t.boolean "suicidal_urges_boolean"
    t.boolean "sib_urges_boolean"
    t.integer "sadness_level"
    t.integer "happiness_level"
    t.integer "anxiety_level"
    t.integer "anger_level"
    t.integer "dysphoria_level"
    t.integer "ed_level"
    t.boolean "used_skills_boolean"
    t.string "mood"
    t.string "details"
    t.string "skills"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "firstname"
    t.string "lastname"
    t.string "password_digest"
    t.integer "age"
    t.string "bio"
    t.string "pronouns"
    t.string "gender"
    t.string "profileimg"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
