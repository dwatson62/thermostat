require 'sinatra'

set :public_folder, proc { File.join(root) }

get '/' do
  File.read('index.html')
end

post '/temperature_change' do
  File.read('index.html')
end