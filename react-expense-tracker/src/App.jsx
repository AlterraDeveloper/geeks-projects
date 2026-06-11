import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
    defaultValues: {
      type: "expense"
    },
    mode: "onChange"
  });

  const [pocket, setPocket] = useState({
    balance: 0,
    income: 0,
    expense: 0
  });
  const [transactions, setTransactions] = useState([]);

  const submitFormHandler = (data) => {
    reset();
    data.id = crypto.randomUUID();
    setTransactions(prev => [...prev, data]);
    setPocket(prev => {
      const newPocket = { ...prev };
      if (data.type === 'income') {
        newPocket.income += data.amount
      } else {
        newPocket.expense += data.amount
      }
      newPocket.balance = newPocket.income - newPocket.expense;
      return newPocket;
    })
  }

  const deleteTransaction = (id) => {
    const deletedTransaction = transactions.find(t => t.id === id);
    setTransactions(prev => prev.filter(t => t.id !== id));
    setPocket(prev => {
      const newPocket = { ...prev };
      if (deletedTransaction.type === 'income') {
        newPocket.income -= deletedTransaction.amount
      } else {
        newPocket.expense -= deletedTransaction.amount
      }
      newPocket.balance = newPocket.income - newPocket.expense;
      return newPocket;
    })
  }

  return (
    <>
      <div className="card">
        <h4>Текущий баланс</h4>
        <h1 style={{ color: 'black' }}>{pocket.balance}</h1>
        <div className="inc-exp-container">
          <div>
            <h4>Доходы</h4>
            <p className="money plus">{pocket.income}</p>
          </div>
          <div>
            <h4>Расходы</h4>
            <p className="money minus">{pocket.expense}</p>
          </div>
        </div>
      </div>
      <div className="card">
        <h3>Список операций</h3>
        <ul className='list'>
          {
            transactions.map((t) =>
              <li className={t.type === 'income' ? 'plus' : 'minus'}>
                {t.text} <span>{t.amount}</span>
                <button onClick={() => deleteTransaction(t.id)} className="delete-btn">x</button>
              </li>)
          }
        </ul>
      </div>
      <div className="card">
        <h3>Учет доходов / расходов</h3>
        <form onSubmit={handleSubmit(submitFormHandler)}>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="income"
                {...register("type", { required: "Please select a type" })}
              />
              Доход
            </label>

            <label>
              <input
                type="radio"
                value="expense"
                {...register("type", { required: "Please select a type" })}
              />
              Расход
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="text">Описание</label>
            <input type="text" {...register("text", {
              required: "Добавьте описание",
              minLength: {
                value: 5,
                message: "Введите минимум 5 символов"
              }
            })} placeholder="Добавьте описание операции" />
            {errors.text && <pre className='error'>{errors.text.message}</pre>}
          </div>
          <div className="form-control">
            <label htmlFor="amount">Сумма</label>
            <input type="number" {...register("amount", {
              required: "Укажите сумму",
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Сумма должна быть больше нуля"
              },
            })} placeholder="Введите сумму операции" />
            {errors.amount && <pre className='error'>{errors.amount.message}</pre>}
          </div>
          <button disabled={!isValid} className="btn">Сохранить</button>
        </form>
      </div>
    </>
  )
}
export default App
