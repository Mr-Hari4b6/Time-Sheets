import '../../appstyles/common/TextField.scss';

export default function TextField ({title,subtitle}) {
    return(
            <div className='textfield'>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
    )
}