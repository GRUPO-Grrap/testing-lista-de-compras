# Casos de Teste - register-item

<br>

# Smoke testing

**Objetivo:**

O objetivo deste teste é avaliar se o sistema funciona bem sob carga mínima.

### CT001: Análise do Tempo de Resposta com um Baixo Número de Usuários.

Este teste tem como objetivo avaliar o tempo de resposta da API ao lidar com cargas de até **5** usuários virtuais (VUS) por segundo durante o período de **1 minuto**. É esperado que o **percentil de duração** seja abaixo de **1000 milissegundos** em **95% das requisições** e que todas as **requisições (100%)** sejam realizadas.

<br>

# Load testing

**Objetivo:**

O objetivo deste teste é avaliar o desempenho do sistema quando ele é submetido a cargas medianas durante um dia normal de produção.

### CT002: Análise do Tempo de Resposta sob Carga Média Durante um Determinado Período de Tempo.

Este teste tem como objetivo avaliar o comportamento da API ao lidar com cargas de até **125** usuários virtuais (VUS) por segundo durante o período de **5 minutos**. É esperado que o **percentil de duração** seja abaixo de **2000 milissegundos** em **95% das requisições** e que todas as **requisições (100%)** sejam realizadas.

<br>
<hr>

**Responsável:** Raphael Kauan
