import React from 'react';
import faker from 'faker';
import CommentDetail from './Comments/CommentDetail';
import ApprovalCard from './Comments/ApprovalCard';


const App = () => {
  return (
    <div className="ui containter comments">
      <ApprovalCard>
        <CommentDetail author="Sam" time="Today at 0:00AM" avatar={faker.image.avatar()} text="Good one!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" time="Yesterday at 0:00AM" avatar={faker.image.avatar()} text="Boriiiing"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" time="Today at 5:00AM" avatar={faker.image.avatar()} text="Agreed with you"/>
      </ApprovalCard>
    </div>
  )
}

export default App;
