import React from "react";
import CommentsText from "./CommentsText";
import connect from "react-redux/lib/connect/connect";
import {sendComment} from "../../../redux/comments-reducer";



// const CommentsTextContainer = (props) => {
//     return(
//         <div>
//             <CommentsText {...props} comments={props.comments}/>
//         </div>
//     )
// }
// // let mapStateToProps = (state) => ({
// //     comments: state.commentsPage.comments
// // })
//
// const Com =  connect({sendComment})(CommentsTextContainer);
// export default Com;