class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.float :temp
      t.string :tempunit
      t.string :symptoms
      t.string :med
      t.float :dose
      t.string :doseunit
      t.time :time
      t.date :date
      t.integer :user_id

      t.timestamps
    end
  end
end
