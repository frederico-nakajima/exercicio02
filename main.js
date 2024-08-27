const estudantes = [
    { nome: 'Marcia', nota01: 10, nota02: 6 },
    { nome: 'Pedro', nota01: 10, nota02: 6 },
    { nome: 'Marcos', nota01: 10, nota02: 6 },
];

function mediaDasNotas(n1, n2) {
    return (n1 + n2) / 2;
}

for (let estudante of estudantes) {
    const media = mediaDasNotas(estudante.nota01, estudante.nota02);
    alert(`Nome: ${estudante.nome}\nMédia: ${media}`);
    

    if (media > 7) {
        alert(`${estudante.nome} aprovado(a)`);
    } else {
        alert(`${estudante.nome} reprovado(a)`);
    }
}
