# Calculadora de Salário

Atualmente, trabalho no varejo e estudo Ciência de Dados. Para realizar a prática do meu curso de Python, resolvi trazer a resolução de um problema do meu dia a dia. Como o salário de pessoas comissionadas é variável, decidi criar um programa onde o usuário colocaria algumas informações para que fosse calculado o salário líquido do mês baseado nas informações fornecidas.

### **Como calcular o salário de pessoas comissionadas?**

O salário comissionado possui algumas particularidades, das quais tentarei resumir aqui. Basicamente devemos calcular da seguinte forma:

---

Salário = proventos - descontos

Proventos = comissão + DSR

Descontos = INSS + IRRF

---

Comissão = total de venda do mês * taxa da meta do mês

*OBS: A taxa da meta é variada e depende se o funcionário atingiu a meta do mês, se não atingiu ou se atingiu a super meta (que corresponde a 120% da meta).*

DSR (Descanso Semanal Remunerado) = (comissao/dias trabalhados) * numero de folgas

Os cálculos do INSS e IRRF foram retirados do site oficial do governo no **ano de 2024**.

Realizei esse programa utilizando a linguagem Python e depois, com a ajuda do meu amigo [Artur Neppel](https://github.com/arturneppel), traduzimos para JavaScript e criamos uma página na web simples para que o programa rodasse.

Confira o resultado do site [aqui!](https://thaistaguiar.github.io/Salario-Vendedor/)
