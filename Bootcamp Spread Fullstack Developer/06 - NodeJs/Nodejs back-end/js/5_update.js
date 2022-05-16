const db = require('./_database');

async function updateData() {
  await db.connect();

  //atualizar participante id 1 para carlos augusto
  const queryParticipante = 'UPDATE participante SET nome = $1 WHERE id = 1';
  await db.query(queryParticipante, ['Carlos Augusto']);

  //remove participante id1 do evento 1
  await db.query(
    'DELETE FROM evento_participante WHERE participante_id = 1 AND evento_id = 1 '
  );

  //encerrar conexão

  await db.end();

  console.log('participante removido');
}

updateData();
