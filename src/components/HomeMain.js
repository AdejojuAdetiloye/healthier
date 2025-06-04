import { RiEye2Line } from "react-icons/ri";
import bitterkola from "../../src/assets/images/bitter-kola.jpg";
import vegetables from '../assets/images/vegatables.jpg';
import { FaComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

export default function HomeMain() {
  return (
    <div className="home-div">
      <div className="main-blog-card">
        <div className="home-image-div">
          <img src={bitterkola} alt="content" className="main-blog-card-image" />
        </div>
        <div className="home-alt-div">
          <h4 className="home-alt-div-title">
            Benefits of eating bitter kola </h4>
          <div className="home-alt-div-desc">
            Bitter kola is a very good herbal product grown in west africa. it
            has vast benefits to human well beign both adults and children.</div>
          <div className="home-alt-div-actions">
            <div className="actions">
              <RiEye2Line className="actions-color" />
              <h5 className="actions-text">3k</h5>
            </div>
            <div className="actions">
              <FaThumbsUp className="actions-color" />
              <h5 className="actions-text">2.5k</h5>
            </div>
            <div className="actions">
              <FaThumbsDown className="actions-color" />
              <h5 className="actions-text">0.5k</h5>
            </div>
            <div className="actions">
              <FaShareNodes className="actions-color" />
              <h5 className="actions-text">100</h5>
            </div>
            <div className="actions">
              <FaComment className="actions-color" />
              <h5 className="actions-text">1.2k</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="main-blog-card">
        <div className="home-image-div">
          <img src={vegetables} alt="content" className="main-blog-card-image" />
        </div>
        <div className="home-alt-div">
          <h4 className="home-alt-div-title">
            How to boost the immune system
          </h4>
          <div className="home-alt-div-desc">
            Immune system can can be boosted by taking some medications or eating some herbal products either in a processed or raw form directly from the farm!
          </div>
          <div className="home-alt-div-actions">
            <div className="actions">
              <RiEye2Line className="actions-color" />
              <h5 className="actions-text">6k</h5>
            </div>
            <div className="actions">
              <FaThumbsUp className="actions-color" />
              <h5 className="actions-text">6k</h5>
            </div>
            <div className="actions">
              <FaThumbsDown className="actions-color" />
              <h5 className="actions-text">0k</h5>
            </div>
            <div className="actions">
              <FaShareNodes className="actions-color" />
              <h5 className="actions-text">5k</h5>
            </div>
            <div className="actions">
              <FaComment className="actions-color" />
              <h5 className="actions-text">5.6k</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
