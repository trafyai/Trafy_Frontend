import CourseHeroSection from "../../../components/course-page/dm-course-page/CourseHeroSection";
import CourseDescriptionSection from "../../../components/course-page/dm-course-page/CourseDescriptionSection";
import CourseSyllabusSection from "../../../components/course-page/dm-course-page/CourseSyllabusSection";
import CourseProjectSection from "../../../components/course-page/dm-course-page/CourseProjectSection";
import CourseReviewSection from "../../../components/course-page/dm-course-page/CourseReviewSection";
import CourseCertificateSection from "../../../components/course-page/dm-course-page/CourseCertificateSection";
import CourseFaqSection from "../../../components/course-page/dm-course-page/CourseFaqSection";
import CoursePaymentSection from "../../../components/course-page/dm-course-page/CoursePaymentSection";
import { Helmet } from 'react-helmet';

export default function dmCoursePage(){

    return(
         <>
         <Helmet>
        <title>Courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.trafyai.com/digital-marketing-course" />
      
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