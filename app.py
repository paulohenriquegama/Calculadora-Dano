from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def home():
    name = "Bases Sonic"
    hp = 2000
    status_img = True
    img_orc = "https://thumbs.gfycat.com/AmbitiousSarcasticBandicoot-size_restricted.gif"

    img_goblin = "https://i.pinimg.com/originals/f6/e7/71/f6e771decdab6712905444a5341afcab.gif"

    img_feiticeiro = "https://i.pinimg.com/originals/55/4f/6e/554f6ea916913c2caab8ec97be82698c.gif"

    img_espada = "https://i.pinimg.com/originals/0d/d5/96/0dd5961f5782b4e89093c9813a1c5a98.gif"

    img_staff = "https://i.pinimg.com/originals/d9/d0/ac/d9d0acb6c69ca4ffbf4137f27890b5d0.png"

    return render_template("index.html",
    name = name,
    img_orc = img_orc,
    img_goblin = img_goblin,
    img_feiticeiro = img_feiticeiro,
    img_espada = img_espada,
    img_staff = img_staff,
    hp = hp,
    status_img = status_img)

@app.route("/pagina2")
def pagina2():
    return '''<button>
            Calcular Dano
        </button>'''
                


if __name__ == "__main__":
    app.run(debug=True)


