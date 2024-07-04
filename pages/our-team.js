
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from '../styles/app.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { homePageService } from "@/store/services/homepageServices";
import { Spinner } from "react-bootstrap";

import Layout from "@/layout/layoutTemplate";

const Ourteam = () => {
	
  const [activePerson, setActivePerson] = useState(null);
  const [data, setData] = useState([]);
  const [isSubmitingLoader, setIsSubmitingLoader] = useState(false);

  const getMeetExecutive = async () => {
    setIsSubmitingLoader(true)
    try {
      let params = {};
      params.sectionName = "DescAccomplishment";
      const response = await homePageService.homePageDescAccomp(params);

      if (response?.data?.success) {
        let dataResp = response?.data?.data;
        let meetExeutiveData = dataResp.filter((item) => item.sectionName == "MeetExecutive" );     
        setData(meetExeutiveData);

      } else {
        alert("unable to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
    setIsSubmitingLoader(false);
  };

  useEffect(() => {
    getMeetExecutive();
  }, []);



  const toggleOverlay = (person) => {
    setActivePerson(activePerson === person ? null : person);
  };

  return (
    <Layout>
      {isSubmitingLoader ? (
        <div className="overlay">
          <div className="spinner-container">
            <Spinner
              className="loaderSpinnerPiyush"
              style={{
                width: "100px",
                height: "100px",
                color: "#0a1c51fc",
              }}
              animation="border"
            />
          </div>
        </div>
      ) : null}

      <div className={styles.container}>
        <div className='text-center mt-4 h4 text-uppercase fw-bolder'>
          <h2  className='ourTeam'>Our Team</h2>
        </div>

        <div className={styles.main}>
          <div className={styles.content}>
            {
              data?.map((item, index) => {
                return (
                  <div className={styles.person} onClick={() => toggleOverlay(item?.column_1)} key={index}   style={{ transition: '.4s ease' }}>

                   

                     <Image
                      src={
                        item.media
                          ? process.env.NEXT_PUBLIC_SITE_URL +
                            item?.media
                          : "/bg-video-banner.jpg"
                      }
                      width={70}
                      height={35}
                      alt={item?.column_1}
                    />
                    <div className={`${styles.personName} mb-1 w-100 text-center p-2`}>
                      <span className='mx-2'>{item?.column_1}</span>
                      <FaArrowRightLong color="white" className={`${styles.arrow}`} />
                    </div>

                    {activePerson === item?.column_1 && (
                      <div className={styles.overlay}>
                        <div className={styles.title}>
                          <h5>{item?.column_1}</h5>
                          <p>{item?.column_2}</p>
                        </div>
                        <div className={styles.des}>
                          <p>{item?.description}</p>

                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            }           

          </div>
        </div>
      </div>
      

    </Layout>

  );
};

export default Ourteam;
