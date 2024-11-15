from flask import Flask, render_template, redirect, request, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'frh63b88v'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///igreja.db'
db = SQLAlchemy(app)

class Adulto(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  nome = db.Column(db.String(100), nullable=False)
  cpf = db.Column(db.BigInteger, unique=True)
  contato = db.Column(db.BigInteger, nullable=False)
  endereco = db.Column(db.String(200), nullable=False)


@app.route('/')
@app.route('/index')
def index():
  return render_template('index.html')

@app.route('/cristao')
def cristao():
  return render_template('cristao.html')

@app.route('/cadastroMembro')
def cadastroMembro():
  return render_template('cadastroMembro.html')

# CRUD codigo para criar
@app.route('/criacao', methods=['POST'])
def criacao_cadastro():
  nome = request.form['nome']
  cpf = request.form['cpf']
  contato = request.form['contato']
  endereco = request.form['endereco']

  existe_adulto = Adulto.query.filter_by(cpf = cpf).first()
  if existe_adulto:
    flash("CPF já cadastrado!")
    return redirect('/cadastroMembro')

  novo_cadastro = Adulto(nome=nome, cpf=cpf, contato=contato, endereco=endereco)
  db.session.add(novo_cadastro)
  db.session.commit()
  return redirect('/dadosMembros')


# CRUD codigo para deletar
@app.route('/deletar/<int:adulto_id>', methods=['POST'])
def deletar(adulto_id):
  adulto = Adulto.query.get(adulto_id)
  if adulto:
    db.session.delete(adulto)
    db.session.commit()
  return redirect('/dadosMembros')

# CRUD codigo para atualizar
@app.route('/atualizar/<int:adulto_id>', methods=['POST'])
def atualizar_adulto(adulto_id):
  adulto = Adulto.query.get(adulto_id)
  if adulto:
    adulto.nome = request.form['nome']
    adulto.cpf = request.form['cpf']
    adulto.contato = request.form['contato']
    adulto.endereco = request.form['endereco']
    db.session.commit()
  return redirect('/cadastroMembro')



# CRUD codigo para mostrar
@app.route('/dadosMembros')
def dadosMembros():
  adultos = Adulto.query.all()
  return render_template('dadosMembros.html', adultos=adultos)

@app.route('/acessoRestrito')
def acessoRestrito():
  return render_template('acessoRestrito.html')

@app.route('/panorama')
def panorama():
  return render_template('panorama.html')

@app.route('/biblia')
def biblia():
  return render_template('biblia.html')

@app.route('/calendario')
def calendario():
  return render_template('calendario.html')

@app.route('/curso')
def curso():
  return render_template('curso.html')

@app.route('/galeria')
def galeria():
  return render_template('galeria.html')

@app.route('/infantil')
def infantil():
  return render_template('infantil.html')

@app.route('/jovem')
def jovem():
  return render_template('jovem.html')

@app.route('/louvor')
def louvor():
  return render_template('louvor.html')

@app.route('/mais')
def mais():
  return render_template('mais.html')

@app.route('/midia')
def midia():
  return render_template('midia.html')

@app.route('/miniblog')
def miniblog():
  return render_template('miniblog.html')

@app.route('/ministerio')
def ministerio():
  return render_template('ministerio.html')

@app.route('/autenticar', methods=['POST'])
def auterticar():
  usuario = request.form.get('usuario')
  senha = request.form.get('senha')
  if usuario == 'admin' and senha == 'Igreja11.12':
    return redirect('/cadastroMembro')
  else:
    flash("Dados invalidos")
    return redirect('/acessoRestrito')

if __name__ == '__main__':
  with app.app_context():
    db.create_all()

  app.run(debug=True, port=5153)
  