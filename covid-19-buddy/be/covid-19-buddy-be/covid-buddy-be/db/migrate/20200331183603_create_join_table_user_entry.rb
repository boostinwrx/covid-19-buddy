class CreateJoinTableUserEntry < ActiveRecord::Migration[6.0]
  def change
    create_table :users_entries do |t|
      t.integer :user_id
      t.integer :entry_id
    end
  end
end
