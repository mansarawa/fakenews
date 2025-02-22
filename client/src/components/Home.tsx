import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useSelector } from 'react-redux';

function Home() {
  const selectedCategory = useSelector((state:any) => state.category.selectedCategory);
console.log(selectedCategory)
    const [email,setEmail]=useState('')
    const [news,setNews]=useState([])
    const [category,setCategory]=useState('')
    const getAllNews=async()=>{
        const res=await fetch('https://newsdata.io/api/1/latest?apikey=pub_71338440992e54a8c7e04075ead15f31a32d3&q=pizza')
        const result=await res.json()
        console.log(result)
        setNews(result.results)
    }
    const handleEmail=async(e:any)=>{
      e.preventDefault()
      const res=await fetch('https://fakenews-y6a6.onrender.com/addCategory',{
        method:'post',
        headers:{
          'Content-Type':'applicaiton/json'
        },
        body:JSON.stringify({email,category})
      })
      const result=await res.json()
      if(result.success){
        setEmail('')
        setCategory('')
      }
      else{
        alert(result.message)
      }
    }
    useEffect(() => {
     getAllNews();
    }, [])
    
  return (
    <>
  <div id="wrapper">
    <Header/>
    {/* end market-header */}
    <section className="section first-section">
      <div className="container-fluid">
        {/* <div className="masonry-blog clearfix" style={{overflowX:'auto',whiteSpace:'nowrap'}}> */}
        <div className="first-slot" style={{display:'flex',overflowX:'auto',width:'100%'}}>
        {news &&  news
    .filter((item: any) => item.category === "TOP") // Filter only 'TOP' category
    .map((item: any, key) => (
      <div className="first-slot" key={key}>
        <div className="masonry-box post-media">
          <img src="upload/tech_01.jpg" alt="" className="img-fluid" />
          <div className="shadoweffect">
            <div className="shadow-desc">
              <div className="blog-meta">
                <span className="bg-orange">
                  <a href="tech-category-01.html" title="">
                    Trending
                  </a>
                </span>
                <h4>
                  <a href={item.link} title="">
                    {item.title}
                  </a>
                </h4>
                <small>
                  <a href="tech-single.html" title="">
                    {item.pubDate}
                  </a>
                </small>
                <small>
                  <a href="tech-author.html" title="">
                    by {item.author}
                  </a>
                </small>
              </div>
              {/* end meta */}
            </div>
            {/* end shadow-desc */}
          </div>
          {/* end shadow */}
        </div>
        {/* end post-media */}
      </div>
    ))}

          
        </div>
        {/* end masonry */}
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className="page-wrapper">
              <div className="blog-top clearfix">
                <h4 className="pull-left">
                  Recent News{" "}
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </h4>
              </div>
              {/* end blog-top */}
              <div className="blog-list clearfix">
              {news && news.filter((item: any) => selectedCategory === "HOME" || item.category.includes(selectedCategory)).map((item: any, key) => (
      <div className="blog-box row" key={key}>
        <div className="col-md-4">
          <div className="post-media">
            <a href="tech-single.html" title="">
              <img src={item.image_url} alt="" className="img-fluid" />
              <div className="hovereffect" />
            </a>
          </div>
          {/* end media */}
        </div>
        {/* end col */}
        <div className="blog-meta big-meta col-md-8">
          <h4>
            <a href={item.link} title="">
              {item.title}
            </a>
          </h4>
          <p>{item.description.split(" ").slice(0, 50).join(" ")}...</p>
          <small className="firstsmall">
            <a className="bg-orange" href="tech-category-01.html" title="">
              {item.category[0]}
            </a>
          </small>
          <small>
            <a href="tech-single.html" title="">{item.pubDate}</a>
          </small>
          <small>
            <a href="tech-author.html" title="">by {item.creator || ""}</a>
          </small>
          <small>
            <a href="tech-single.html" title="">
              <i className="fa fa-eye" /> 1114
            </a>
          </small>
        </div>
        {/* end meta */}
      </div>
    ))}

                
                <hr className="invis" />
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="banner-spot clearfix">
                      <div className="banner-img">
                        <img
                          src="upload/banner_02.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      {/* end banner-img */}
                    </div>
                    {/* end banner */}
                  </div>
                  {/* end col */}
                </div>
               
              </div>
              {/* end blog-list */}
            </div>
            {/* end page-wrapper */}
            <hr className="invis" />
            <div className="row">
              <div className="col-md-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-start">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end col */}
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
              <div className="widget">
                <div className="banner-spot clearfix">
                  <div className="banner-img">
                    <img
                      src="/upload/banner_07.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* end banner-img */}
                </div>
                {/* end banner */}
              </div>
              {/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Trend Videos</h2>
                <div className="trend-videos">
                  <div className="blog-box">
                    <div className="post-media">
                      <a href="tech-single.html" title="">
                        <img
                          src="upload/tech_video_01.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="hovereffect">
                          <span className="videohover" />
                        </div>
                        {/* end hover */}
                      </a>
                    </div>
                    {/* end media */}
                    <div className="blog-meta">
                      <h4>
                        <a href="tech-single.html" title="">
                          We prepared the best 10 laptop presentations for you
                        </a>
                      </h4>
                    </div>
                    {/* end meta */}
                  </div>
                  {/* end blog-box */}
                  <hr className="invis" />
                  <div className="blog-box">
                    <div className="post-media">
                      <a href="tech-single.html" title="">
                        <img
                          src="upload/tech_video_02.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="hovereffect">
                          <span className="videohover" />
                        </div>
                        {/* end hover */}
                      </a>
                    </div>
                    {/* end media */}
                    <div className="blog-meta">
                      <h4>
                        <a href="tech-single.html" title="">
                          We are guests of ABC Design Studio - Vlog
                        </a>
                      </h4>
                    </div>
                    {/* end meta */}
                  </div>
                  {/* end blog-box */}
                  <hr className="invis" />
                  <div className="blog-box">
                    <div className="post-media">
                      <a href="tech-single.html" title="">
                        <img
                          src="upload/tech_video_03.jpg"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="hovereffect">
                          <span className="videohover" />
                        </div>
                        {/* end hover */}
                      </a>
                    </div>
                    {/* end media */}
                    <div className="blog-meta">
                      <h4>
                        <a href="tech-single.html" title="">
                          Both blood pressure monitor and intelligent clock
                        </a>
                      </h4>
                    </div>
                    {/* end meta */}
                  </div>
                  {/* end blog-box */}
                </div>
                {/* end videos */}
              </div>
              {/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Popular Posts</h2>
                <div className="blog-list-widget">
                  <div className="list-group">
                    <a
                      href="tech-single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 justify-content-between">
                        <img
                          src="upload/tech_blog_08.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          5 Beautiful buildings you need..
                        </h5>
                        <small>12 Jan, 2016</small>
                      </div>
                    </a>
                    <a
                      href="tech-single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 justify-content-between">
                        <img
                          src="upload/tech_blog_01.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          Let's make an introduction for..
                        </h5>
                        <small>11 Jan, 2016</small>
                      </div>
                    </a>
                    <a
                      href="tech-single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 last-item justify-content-between">
                        <img
                          src="upload/tech_blog_03.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          Did you see the most beautiful..
                        </h5>
                        <small>07 Jan, 2016</small>
                      </div>
                    </a>
                  </div>
                </div>
                {/* end blog-list */}
              </div>
              {/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Recent Reviews</h2>
                <div className="blog-list-widget">
                  <div className="list-group">
                    <a
                      href="tech-single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 justify-content-between">
                        <img
                          src="upload/tech_blog_02.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          Banana-chip chocolate cake recipe..
                        </h5>
                        <span className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                    </a>
                    <a
                      href="tech-single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 justify-content-between">
                        <img
                          src="upload/tech_blog_03.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          10 practical ways to choose organic..
                        </h5>
                        <span className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                    </a>
                    <a
                      href="tech-single.html"
                      className="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div className="w-100 last-item justify-content-between">
                        <img
                          src="upload/tech_blog_07.jpg"
                          alt=""
                          className="img-fluid float-left"
                        />
                        <h5 className="mb-1">
                          We are making homemade ravioli..
                        </h5>
                        <span className="rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                {/* end blog-list */}
              </div>
              {/* end widget */}
              <div className="widget">
                <h2 className="widget-title">Follow Us</h2>
                <div className="row text-center">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button facebook-button">
                      <i className="fa fa-facebook" />
                      <p>27k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button twitter-button">
                      <i className="fa fa-twitter" />
                      <p>98k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button google-button">
                      <i className="fa fa-google-plus" />
                      <p>17k</p>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <a href="#" className="social-button youtube-button">
                      <i className="fa fa-youtube" />
                      <p>22k</p>
                    </a>
                  </div>
                </div>
              </div>
              {/* end widget */}
              <div className="widget">
                <div className="banner-spot clearfix">
                  <div className="banner-img">
                    <img
                      src="upload/banner_03.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  {/* end banner-img */}
                </div>
                {/* end banner */}
              </div>
              {/* end widget */}
            </div>
            {/* end sidebar */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="widget">
              <div className="footer-text text-left">
                <a href="index.html">
                  <img
                    src="images/version/tech-footer-logo.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <p>
                  Tech Blog is a technology blog, we sharing marketing, news and
                  gadget articles.
                </p>
                <div className="social">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Google Plus"
                  >
                    <i className="fa fa-google-plus" />
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Pinterest"
                  >
                    <i className="fa fa-pinterest" />
                  </a>
                </div>
                <hr className="invis" />
                <div className="newsletter-widget text-left">
                  <form className="form-inline" onSubmit={handleEmail}>

                    <select name="" id="" className="form-control" onChange={(e)=>setCategory(e.target.value)}>
                        <option value="food">FOOD</option>
                        <option value="business">BUSINESS</option>
                        <option value="entertinment">ENTERTINMENT</option>
                        <option value="WORLD">WORLD</option>
                        <option value="top">TOP</option>
                        <option value="TOURISM">TOURISM</option>
                    </select>
                    <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} name="" id="" required/>
                    <button type="submit" className="btn btn-primary">
                      SUBMIT
                    </button>
                  </form>
                </div>
                {/* end newsletter */}
              </div>
              {/* end footer-text */}
            </div>
            {/* end widget */}
          </div>
          {/* end col */}
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="widget">
              <h2 className="widget-title">Popular Categories</h2>
              <div className="link-widget">
                <ul>
                  <li>
                    <a href="#">
                      Marketing <span>(21)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      SEO Service <span>(15)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Digital Agency <span>(31)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Make Money <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Blogging <span>(66)</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* end link-widget */}
            </div>
            {/* end widget */}
          </div>
          {/* end col */}
          <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
            <div className="widget">
              <h2 className="widget-title">Copyrights</h2>
              <div className="link-widget">
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Write for us</a>
                  </li>
                  <li>
                    <a href="#">Trademark</a>
                  </li>
                  <li>
                    <a href="#">License &amp; Help</a>
                  </li>
                </ul>
              </div>
              {/* end link-widget */}
            </div>
            {/* end widget */}
          </div>
          {/* end col */}
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <br />
            <div className="copyright">
              © FakeNews. Design: <a href="http://html.design">HTML Design</a>.
            </div>
          </div>
        </div>
      </div>
   
    </footer>
    
    {/* <div className="dmtop">Scroll to Top</div> */}
  </div>
  
</>

  )
}

export default Home