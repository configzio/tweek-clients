//
// TagsAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Alamofire



public class TagsAPI: APIBase {
    /**

     - parameter body: (body) The tags that need saving 
     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func saveTag(body body: AnyObject, completion: ((error: ErrorType?) -> Void)) {
        saveTagWithRequestBuilder(body: body).execute { (response, error) -> Void in
            completion(error: error);
        }
    }


    /**
     - PUT /tags
     - Save tags     - parameter body: (body) The tags that need saving 

     - returns: RequestBuilder<Void> 
     */
    public class func saveTagWithRequestBuilder(body body: AnyObject) -> RequestBuilder<Void> {
        let path = "/tags"
        let URLString = OpenAPIClientAPI.basePath + path
        let parameters = body.encodeToJSON() as? [String:AnyObject]
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<Void>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PUT", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

    /**

     - parameter completion: completion handler to receive the data and the error objects
     */
    public class func tagsGet(completion: ((data: [String]?, error: ErrorType?) -> Void)) {
        tagsGetWithRequestBuilder().execute { (response, error) -> Void in
            completion(data: response?.body, error: error);
        }
    }


    /**
     - GET /tags
     - Get all tags     - examples: [{contentType=application/json, example="", statusCode=200}]

     - returns: RequestBuilder<[String]> 
     */
    public class func tagsGetWithRequestBuilder() -> RequestBuilder<[String]> {
        let path = "/tags"
        let URLString = OpenAPIClientAPI.basePath + path

        let nillableParameters: [String:AnyObject?] = [:]
 
        let parameters = APIHelper.rejectNil(nillableParameters)
 
        let convertedParameters = APIHelper.convertBoolToString(parameters)
 
        let requestBuilder: RequestBuilder<[String]>.Type = OpenAPIClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: URLString, parameters: convertedParameters, isBody: true)
    }

}
