// Props 사용
// Props : Properties
// component와 component사이에서 값을 전달할때 사용하는 객체

function Props(props){
    return(
        <article calssName="article">
            {props.number}
        </article>
    );

}

export default Props;
