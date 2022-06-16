class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :todo_title
      t.string :description
      t.datetime :creation_date
      t.datetime :completion_date

      t.timestamps
    end
  end
end
