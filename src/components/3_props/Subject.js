import "../../styles/styles.css";

export const Subject = ({ sub }) => {
  //   console.log(sub[0].SubjectTitle);
  return (
    <div className="box">
      <ul className="Subject">
        <h1>오늘의 수업</h1>
        <li className="Subj">
          <h3>수업 과목 : {sub[0].SubjectTitle}</h3>
        </li>
        <li className="Subj">
          <h3>수업 과목 : {sub[1].SubjectTitle}</h3>
        </li>
        <li className="Subj">
          <h3>수업 과목 : {sub[2].SubjectTitle}</h3>
        </li>
        <li className="Subj">
          <h3>수업 과목 : {sub[3].SubjectTitle}</h3>
        </li>
        <li className="Subj">
          <h3>수업 과목 : {sub[4].SubjectTitle}</h3>
        </li>
      </ul>
    </div>
  );
};
