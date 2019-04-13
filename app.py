from flask import Flask
from controllers.api import route_api

app = Flask(__name__)

app.register_blueprint(route_api,url_prefix='/api')

@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run( host="0.0.0.0",debug=True)
