import { useSelector, useDispatch } from 'react-redux'


export default function Form({ children }) {
  return (
    <Panel title="Привіт!" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur urna vitae lorem posuere condimentum. Nunc imperdiet neque quis massa rutrum sodales. Fusce ornare, nisl in malesuada aliquet, tellus ante accumsan sem.">
      <Button>Звʼязатись з нами</Button>
    </Panel>
  );
}

function Panel({ title, text, children }) {
  const theme = useSelector((state) => state.theme)
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useSelector((state) => state.theme)
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );

    
}