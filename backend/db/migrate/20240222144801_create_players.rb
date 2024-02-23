class CreatePlayers < ActiveRecord::Migration[7.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :completion_time_in_seconds

      t.timestamps
    end
  end
end
