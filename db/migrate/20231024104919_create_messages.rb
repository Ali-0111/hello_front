class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :greetings_text
      t.timestamps
    end
  end
end
