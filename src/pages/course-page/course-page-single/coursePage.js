import CourseHeroSection from "../../../components/course-page/s-course-page/CourseHeroSection";
import CourseDescriptionSection from "../../../components/course-page/s-course-page/CourseDescriptionSection";
import CourseSyllabusSection from "../../../components/course-page/s-course-page/CourseSyllabusSection";
import CourseProjectSection from "../../../components/course-page/s-course-page/CourseProjectSection";
import CourseReviewSection from "../../../components/course-page/s-course-page/CourseReviewSection";
import CourseCertificateSection from "../../../components/course-page/s-course-page/CourseCertificateSection";
import CourseFaqSection from "../../../components/course-page/s-course-page/CourseFaqSection";
import CoursePaymentSection from "../../../components/course-page/s-course-page/CoursePaymentSection";
import { Helmet } from 'react-helmet';

export default function coursePage(){

    return(
         <>
         <Helmet>
        <title>Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.trafyai.com/uiux-course" />
      
      </Helmet>
       <CourseHeroSection/>
       <CourseDescriptionSection/>
       <CourseSyllabusSection/>
       <CourseProjectSection/>
       <CourseReviewSection/>
       <CourseCertificateSection/>
       <CoursePaymentSection/>
       <CourseFaqSection/>

         </>

    )

}