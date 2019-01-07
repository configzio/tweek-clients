/*
 * Tweek
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 * Generated by: https://openapi-generator.tech
 */

using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.SwaggerGen;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using Org.OpenAPITools.Attributes;
using Org.OpenAPITools.Models;

namespace Org.OpenAPITools.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    public class ManifestApiController : ControllerBase
    { 
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>Get Manifests</remarks>
        /// <response code="200">Ok</response>
        [HttpGet]
        [Route("/api/v2/manifests")]
        [ValidateModelState]
        [SwaggerOperation("GetManifests")]
        [SwaggerResponse(statusCode: 200, type: typeof(List<Object>), description: "Ok")]
        public virtual IActionResult GetManifests()
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(List<Object>));

            string exampleJson = null;
            exampleJson = "\"{}\"";
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<List<Object>>(exampleJson)
            : default(List<Object>);
            //TODO: Change the data returned
            return new ObjectResult(example);
        }
    }
}
