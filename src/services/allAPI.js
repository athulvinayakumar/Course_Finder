import { Base_Url } from "./baseUrl"
import { commonAPI } from "./commonAPI"

// register Api
export const registerAPI = async (user) => {
   return await commonAPI("POST", `${Base_Url}/user/register`, user, "")
}

// login Api
export const loginAPI = async (user) => {
   return await commonAPI("POST", `${Base_Url}/user/login`, user, "")
}
// register Api
export const courseregisterAPI = async (user) => {
   return await commonAPI("POST", `${Base_Url}/courser/register`, user, "")
}

// login Api
export const courseloginAPI = async (user) => {
   return await commonAPI("POST", `${Base_Url}/courser/login`, user, "")
}


//add Categorgy
export const addCategoryAPI = async (reqBody, reqHeader) => {
   return await commonAPI("POST", `${Base_Url}/admin/addcategory`, reqBody, reqHeader);
};

//  view category
export const getCategoryAPI = async (reqHeader) => {
   return await commonAPI("GET", `${Base_Url}/admin/getcategory`, "", reqHeader)
}

//  edit category
export const editCategoryAPI = async (adminId, reqBody, reqHeader) => {
   return await commonAPI("PUT", `${Base_Url}/admin/editcategory/${adminId}`, reqBody, reqHeader)
}

//  delete 
export const deleteCategoryAPI = async (adminId, reqHeader) => {
   return await commonAPI("DELETE", `${Base_Url}/admin/remove/${adminId}`, {}, reqHeader)
}
// allusers
export const getAllUsers = async (reqheader) => {
   return await commonAPI('GET', `${Base_Url}/user/getalluser`, "", reqheader)
}

// allusers
export const getAllCoursers = async (reqheader) => {
   return await commonAPI('GET', `${Base_Url}/courser/getallcoursers`, "", reqheader)
}

//addCourse
export const addCourseAPI = async (reqBody, reqHeader) => {
   return await commonAPI("POST", `${Base_Url}/courser/addcourse`, reqBody, reqHeader)
}

//view category
export const getCategoriesAPI = async () => {
   return await commonAPI("GET", `${Base_Url}/admin/getcategories`);
};

//view Course
export const getCourseAPI = async (reqHeader) => {
   return await commonAPI("GET", `${Base_Url}/courser/getcourse`, "", reqHeader)
}

//view Course
export const getAllCourseAPI = async (searchKey, reqHeader) => {
   return await commonAPI("GET", `${Base_Url}/courser/getallcourse?search=${searchKey}`, "", reqHeader)
}

//view Course
export const getAllCoursesAPI = async (reqHeader) => {
   return await commonAPI("GET", `${Base_Url}/courser/getallcourses`, "", reqHeader)
}

// edit course
export const editCourseAPI = async (courserId, reqBody, reqHeader) => {
   return await commonAPI("PUT", `${Base_Url}/courser/edit/${courserId}`, reqBody, reqHeader)
}

// delete course
export const deleteCourseAPI = async (courserId, reqHeader) => {
   return await commonAPI("DELETE", `${Base_Url}/courser/remove/${courserId}`, {}, reqHeader)
}

// enroll course
export const enrollNowAPI = async(reqBody,reqHeader)=>{
   return await commonAPI('POST',`${Base_Url}/user/enrollnow`,reqBody,reqHeader)
 }

//  get enrolled user
export const enrollUserAPI = async (userId,reqHeader) => {
   return await commonAPI('GET', `${Base_Url}/user/enrollusers/${userId}`, "", reqHeader);
 }
 
export const getCombine = async (userId,reqHeader) => {
   return await commonAPI('GET', `${Base_Url}/courser/getallcombine/${userId}`, "", reqHeader);
 }

 // delete course
export const deleteEnrolledAPI = async (enrollId, reqHeader) => {
   return await commonAPI("DELETE", `${Base_Url}/user/removeEnrolled/${enrollId}`, {}, reqHeader)
}

 


 



