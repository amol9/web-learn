from flask import Flask, request, make_response

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        res = make_response("hello %s, email: %s"%(name, email))
        res.headers['Access-Control-Allow-Origin'] = "*"

        return res

if __name__ == '__main__':
    app.run(debug=True, port=8000)