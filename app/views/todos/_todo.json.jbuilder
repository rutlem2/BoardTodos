json.extract! todo, :id, :todo_title, :description, :creation_date, :completion_date, :created_at, :updated_at
json.url todo_url(todo, format: :json)
