import "./BlogDetails.css";
import bitterKola from "../src/assets/images/bitter-kola.jpg";
import { FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { RiEye2Line } from "react-icons/ri";
import backarrow from '../src/assets/icons/arrow.svg'
import {useNavigate} from 'react-router-dom'

export default function BlogDetails() {
    //function to go bsck
    const navigate = useNavigate()
    function goBack(){
        navigate('/blogs');
    }
  return (
    <div className="blog-details-div">
        <div className="detail-back-arrow-div">
            <img src={backarrow} alt="back-arrow" className="back-arrow" onClick={goBack} />
        </div>
      <img src={bitterKola} alt="blog-banner" className="blog-banner" />
      {/* Blog Actions Div */}
      <div className="detail-alt-div-actions">
        <div className="detail-actions">
          <RiEye2Line className="detail-actions-color" />
          <h5 className="detail-actions-text">3k</h5>
        </div>
        <div className="detail-actions">
          <FaThumbsUp className="detail-actions-color" />
          <h5 className="detail-actions-text">2.5k</h5>
        </div>
        <div className="detail-actions">
          <FaThumbsDown className="detail-actions-color" />
          <h5 className="detail-actions-text">0.5k</h5>
        </div>
        <div className="detail-actions">
          <FaShareNodes className="detail-actions-color" />
          <h5 className="detail-actions-text">100</h5>
        </div>
        <div className="detail-actions">
          <FaComment className="detail-actions-color" />
          <h5 className="detail-actions-text">1.2k</h5>
        </div>
      </div>
      <h1 className="blog-detail-title">Benefits of Eating Bitter Kola</h1>
      
      <section className="blog-description-detail">
        This is the detail of the blod description. Eating bitter kola is very good for digestion purposes and it can also boost immune system and cure some infections in the body that may be hidden or without any prior symptoms.
        This is the detail of the blod description. Eating bitter kola is very good for digestion purposes and it can also boost immune system and cure some infections in the body that may be hidden or without any prior symptoms.
        This is the detail of the blod description. Eating bitter kola is very good for digestion purposes and it can also boost immune system and cure some infections in the body that may be hidden or without any prior symptoms.
      </section>
      {/* COMMENT SECTION */}
      <section className="comment-section">
        <h1 className="comment-header">Leave a comment</h1>
        <textarea className="comment-area"/>
        <button className="comment-button">Comment</button>
      </section>
    </div>
  );
}
