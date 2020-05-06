class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.boolean :suicidal_urges_boolean
      t.boolean :sib_urges_boolean

      t.integer :sadness_level
      t.integer :happiness_level
      t.integer :anxiety_level
      t.integer :anger_level
      t.integer :dysphoria_level
      t.integer :ed_level

      t.boolean :used_skills_boolean
      t.string :mood
      t.string :details
      t.string :skills

      t.integer :user_id



      t.timestamps
    end
  end
end
