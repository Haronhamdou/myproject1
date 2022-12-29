from flask import *
from flask_pymongo import *
from bson.json_util import dumps 
from flask_cors import CORS,cross_origin


app = Flask(__name__)
app.config["MONGO_URI"] = ""
mongo = PyMongo(app)

CORS(app, support_credentials=True)

@app.route('/api/anime', methods=['POST', 'GET','OPTIONS'])
@cross_origin(supports_credentials=True)
def index():
    anime = mongo.db.myanime.find()
    x = dumps(anime , ensure_ascii = False)
    if(request.method=='POST'):
     some_json=request.get_json()
     return jsonify({"key":some_json})
    else:
        return x
    
if __name__ == "__main__":
    app.run()
    
