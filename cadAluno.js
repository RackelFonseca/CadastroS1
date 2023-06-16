/*exports.maiorNota = function(alunos) {
  var max = alunos[0];
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i] > max) {
      max = alunos[i];
    }
  }
  return max;
}

exports.menorNota = function(alunos) {
  var min = alunos[0];
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i] < min) {
      min = alunos[i];
    }
  }
  return min;
}*/

exports.maiorNota = function(alunos) {
  let maiorNota = alunos[0].nota;
  let alunoMaiorNota = alunos[0];

  alunos.forEach(aluno => {
    if (aluno.nota > maiorNota) {
      maiorNota = aluno.nota;
      alunoMaiorNota = aluno;
    }
  });

  return alunoMaiorNota;
}

exports.menorNota = function(alunos) {
  let menorNota = alunos[0].nota;
  let alunoMenorNota = alunos[0];

  alunos.forEach(aluno => {
    if (aluno.nota < menorNota) {
      menorNota = aluno.nota;
      alunoMenorNota = aluno;
    }
  });

  return alunoMenorNota;
}

exports.media = function(alunos) {

  var somaNotas = 0;

  alunos.forEach(aluno => {
    somaNotas += aluno.nota;
  })

  return somaNotas / alunos.length;
}

exports.aprovados = function(alunos) {

  let quantidadeAprovados = 0;

  alunos.forEach(aluno => {
    if (aluno.nota >= 60) {
      quantidadeAprovados++;
    }
  });

  return quantidadeAprovados;
}

exports.reprovados = function(alunos) {

  let quantidadeReprovados = 0;

  alunos.forEach(aluno => {
    if (aluno.nota < 60) {
      quantidadeReprovados++;
    }
  });

  return quantidadeReprovados;
}