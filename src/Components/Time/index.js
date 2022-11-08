import './Time.css';

export const Time = (props) => {
    
    return (
        <section className='time' style={{ backgroundColor: props.corSecundaria}}>
              <h3>{props.name}</h3>
        </section>
    )
}