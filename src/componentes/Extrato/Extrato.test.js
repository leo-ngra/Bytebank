import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve renderizar uma lista de transacoes', () => {
  const transacoes = [
    {
      transacao: 'Deposito',
      valor: 100,
    },
  ];
  render(<Extrato transacoes={transacoes} />);

  const lista = screen.getByRole('listitem');

  expect(lista).toBeInTheDocument();
});
