# Atlético Maneiro Academy - Avaliação A1.3 (FDW 2026/2)

Site de escola de futebol com PHP + MySQL + JavaScript.

## Seções ligadas ao banco de dados
| Seção | Tabela | Funcionalidade | Arquivos PHP |
|---|---|---|---|
| Depoimentos | `depoimentos` | Listagem (SELECT) e inserção (INSERT) | `listar_depoimentos.php`, `salvar_depoimento.php` |
| Contato | `contatos` | Inserção (INSERT) | `salvar_contato.php` |
| Blog | `posts` | Listagem (SELECT) | `listar_posts.php` |

## Como rodar
1. Instale o XAMPP e ligue **Apache** e **MySQL**.
2. Copie esta pasta para `C:\xampp\htdocs\atividadeavaliativa`.
3. No phpMyAdmin (`http://localhost/phpmyadmin`), aba **Importar**, importe `banco.sql`.
4. Acesse `http://localhost/atividadeavaliativa/`.

O arquivo `php/conexao.php` usa usuário `root`, sem senha e o banco `atletico_maneiro`.
