/* 
 * Tweek
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Org.OpenAPITools.Client;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Model;

namespace Org.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing PolicyApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class PolicyApiTests
    {
        private PolicyApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new PolicyApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of PolicyApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' PolicyApi
            //Assert.IsInstanceOfType(typeof(PolicyApi), instance, "instance is a PolicyApi");
        }

        
        /// <summary>
        /// Test GetPolicies
        /// </summary>
        [Test]
        public void GetPoliciesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetPolicies();
            //Assert.IsInstanceOf<List<Object>> (response, "response is List<Object>");
        }
        
        /// <summary>
        /// Test ReplacePolicy
        /// </summary>
        [Test]
        public void ReplacePolicyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //instance.ReplacePolicy();
            
        }
        
        /// <summary>
        /// Test UpdatePolicy
        /// </summary>
        [Test]
        public void UpdatePolicyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<PatchOperation> patchOperation = null;
            //instance.UpdatePolicy(patchOperation);
            
        }
        
    }

}
