/* 
 * Tweek
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace IO.Swagger.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IAppsApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>AppCreationResponseModel</returns>
        AppCreationResponseModel AppsCreateApp (string authorName, string authorEmail, AppCreationRequestModel newAppModel);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>ApiResponse of AppCreationResponseModel</returns>
        ApiResponse<AppCreationResponseModel> AppsCreateAppWithHttpInfo (string authorName, string authorEmail, AppCreationRequestModel newAppModel);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>Task of AppCreationResponseModel</returns>
        System.Threading.Tasks.Task<AppCreationResponseModel> AppsCreateAppAsync (string authorName, string authorEmail, AppCreationRequestModel newAppModel);

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>Task of ApiResponse (AppCreationResponseModel)</returns>
        System.Threading.Tasks.Task<ApiResponse<AppCreationResponseModel>> AppsCreateAppAsyncWithHttpInfo (string authorName, string authorEmail, AppCreationRequestModel newAppModel);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class AppsApi : IAppsApi
    {
        private IO.Swagger.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="AppsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public AppsApi(String basePath)
        {
            this.Configuration = new IO.Swagger.Client.Configuration { BasePath = basePath };

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AppsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public AppsApi(IO.Swagger.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = IO.Swagger.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = IO.Swagger.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public IO.Swagger.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public IO.Swagger.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>AppCreationResponseModel</returns>
        public AppCreationResponseModel AppsCreateApp (string authorName, string authorEmail, AppCreationRequestModel newAppModel)
        {
             ApiResponse<AppCreationResponseModel> localVarResponse = AppsCreateAppWithHttpInfo(authorName, authorEmail, newAppModel);
             return localVarResponse.Data;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>ApiResponse of AppCreationResponseModel</returns>
        public ApiResponse< AppCreationResponseModel > AppsCreateAppWithHttpInfo (string authorName, string authorEmail, AppCreationRequestModel newAppModel)
        {
            // verify the required parameter 'authorName' is set
            if (authorName == null)
                throw new ApiException(400, "Missing required parameter 'authorName' when calling AppsApi->AppsCreateApp");
            // verify the required parameter 'authorEmail' is set
            if (authorEmail == null)
                throw new ApiException(400, "Missing required parameter 'authorEmail' when calling AppsApi->AppsCreateApp");
            // verify the required parameter 'newAppModel' is set
            if (newAppModel == null)
                throw new ApiException(400, "Missing required parameter 'newAppModel' when calling AppsApi->AppsCreateApp");

            var localVarPath = "/apps";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (authorName != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "author.name", authorName)); // query parameter
            if (authorEmail != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "author.email", authorEmail)); // query parameter
            if (newAppModel != null && newAppModel.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(newAppModel); // http body (model) parameter
            }
            else
            {
                localVarPostBody = newAppModel; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AppsCreateApp", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<AppCreationResponseModel>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (AppCreationResponseModel) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(AppCreationResponseModel)));
        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>Task of AppCreationResponseModel</returns>
        public async System.Threading.Tasks.Task<AppCreationResponseModel> AppsCreateAppAsync (string authorName, string authorEmail, AppCreationRequestModel newAppModel)
        {
             ApiResponse<AppCreationResponseModel> localVarResponse = await AppsCreateAppAsyncWithHttpInfo(authorName, authorEmail, newAppModel);
             return localVarResponse.Data;

        }

        /// <summary>
        ///  
        /// </summary>
        /// <exception cref="IO.Swagger.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorName"></param>
        /// <param name="authorEmail"></param>
        /// <param name="newAppModel"></param>
        /// <returns>Task of ApiResponse (AppCreationResponseModel)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<AppCreationResponseModel>> AppsCreateAppAsyncWithHttpInfo (string authorName, string authorEmail, AppCreationRequestModel newAppModel)
        {
            // verify the required parameter 'authorName' is set
            if (authorName == null)
                throw new ApiException(400, "Missing required parameter 'authorName' when calling AppsApi->AppsCreateApp");
            // verify the required parameter 'authorEmail' is set
            if (authorEmail == null)
                throw new ApiException(400, "Missing required parameter 'authorEmail' when calling AppsApi->AppsCreateApp");
            // verify the required parameter 'newAppModel' is set
            if (newAppModel == null)
                throw new ApiException(400, "Missing required parameter 'newAppModel' when calling AppsApi->AppsCreateApp");

            var localVarPath = "/apps";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (authorName != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "author.name", authorName)); // query parameter
            if (authorEmail != null) localVarQueryParams.AddRange(this.Configuration.ApiClient.ParameterToKeyValuePairs("", "author.email", authorEmail)); // query parameter
            if (newAppModel != null && newAppModel.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(newAppModel); // http body (model) parameter
            }
            else
            {
                localVarPostBody = newAppModel; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("AppsCreateApp", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<AppCreationResponseModel>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => x.Value.ToString()),
                (AppCreationResponseModel) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(AppCreationResponseModel)));
        }

    }
}
