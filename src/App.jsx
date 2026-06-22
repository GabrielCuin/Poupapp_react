import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { DailyBudget } from "./components/DailyBudget";

import Card from "./components/Card";
import { SavingStatus } from "./components/SavingsStatus";

import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá, Cuin!</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingStatus percent={40} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <p>200</p>
                <p>200</p>
                <p>200</p>
                <p>200</p>
                <p>200</p>
                <p>200</p>
                <p>200</p>
                <p>200</p>
                <p>200</p>
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
