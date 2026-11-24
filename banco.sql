SET NAMES utf8mb4;
CREATE DATABASE IF NOT EXISTS atletico_maneiro CHARACTER SET utf8mb4;
USE atletico_maneiro;

-- Seção CONTATO (insert)
CREATE TABLE IF NOT EXISTS contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  telefone VARCHAR(20),
  mensagem TEXT NOT NULL,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seção DEPOIMENTOS (listagem + insert)
CREATE TABLE IF NOT EXISTS depoimentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  perfil VARCHAR(60) NOT NULL,
  foto VARCHAR(150) NOT NULL DEFAULT 'img/depoimentos/demo-1.jpg',
  texto TEXT NOT NULL,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seção BLOG (listagem)
CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  imagem VARCHAR(150) NOT NULL,
  imagem_alt VARCHAR(200),
  conteudo TEXT NOT NULL,
  fonte_nome VARCHAR(100),
  fonte_url VARCHAR(255),
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO depoimentos (nome, perfil, foto, texto, criado_em) VALUES
('Marisa Fontana', 'Mãe de aluno', 'img/depoimentos/marisa.jpg', 'Meu filho entrou tímido, com medo até de pedir a bola pro time. Depois de uns 3 meses ali, virou outro moleque, não só em campo, em casa também. O jeito que o Vinicius trata as crianças faz toda diferença.', '2026-03-12 10:00:00'),
('Rogério Bittencourt', 'Pai de aluno', 'img/depoimentos/rogerio.jpg', 'Testei duas escolinhas antes de chegar na Atlético Maneiro. A diferença é que aqui o treino tem plano, não é só bater bola por bater. Meu filho evoluiu de posição, de leitura de jogo, tudo isso em menos de um ano.', '2026-06-27 10:00:00'),
('Kauê Lorenzetti', 'Aluno, categoria Sub-15', 'img/depoimentos/kaue.jpg', 'Fiz a preparação pra peneira aqui antes de tentar uma vaga na base de um clube maior. O Diego não deixou eu enrolar em nada, treino físico pesado mesmo. Passei na primeira tentativa.', '2026-08-14 10:00:00');

INSERT INTO posts (titulo, autor, imagem, imagem_alt, conteudo, fonte_nome, fonte_url, criado_em) VALUES
('Seu filho não precisa jogar só bola pra virar craque', 'Vinicius, Técnico', 'img/blog-iniciacao.jpg', 'Criança brincando de futebol descalça no campo', 'Criança que só treina futebol o ano inteiro, sem variar em outras atividades, tende a desenvolver menos coordenação motora do que quem teve uma infância mais ativa e variada. Até os 12 anos, o foco não é fazer o craque, mas formar sua base motora. O restante vem depois.', 'campus.universidadedofutebol.com.br', 'https://campus.universidadedofutebol.com.br/a-importancia-da-iniciacao-esportiva-para-o-desenvolvimento-motor-infantil/', '2026-02-03 09:15:00'),
('Treino é só metade do trabalho', 'Diego, Preparador Físico', 'img/blog-descanso.jpg', 'Jovem atleta descansando', 'Sono ruim e alimentação inadequada atrapalham mais o desempenho do que qualquer erro técnico. É descansando que o corpo absorve o que foi treinado. Dormir cedo, alimentar-se antes do treino e manter-se hidratado fazem mais diferença do que parece no jogo de fim de semana.', 'clinicaphysico.com.br', 'https://www.clinicaphysico.com.br/o-que-um-atleta-de-futebol-precisa-monitorar-alem-do-treino/', '2026-05-21 18:40:00');
