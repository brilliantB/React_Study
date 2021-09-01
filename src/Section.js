// 객체 : {props.children}
// 구조 분해 할당 : {children}

function Section({children}){
    return(
        <section className="section">
            {children}
        </section>
    );
}

export default Section;