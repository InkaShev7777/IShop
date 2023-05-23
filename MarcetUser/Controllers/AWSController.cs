using System;
using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Mvc;

namespace MarcetUser.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AWSController : ControllerBase
    {
        public string accessKey { get; private set; }
        public string secretKey { get; private set; }
        AmazonS3Client s3Client;
        public AWSController()
		{
            this.accessKey = "AKIASGPBJ3IHQHE3MKNF";
            this.secretKey = "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";
            this.s3Client = new AmazonS3Client(accessKey, secretKey, Amazon.RegionEndpoint.EUWest2);
		}
        [HttpPost]
        [Route("upload-file-to-aws")]
        public async Task<IResult> UploadFile(IFormFile file)
        {
            await using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            var fileExtention = Path.GetExtension(file.FileName);
            string name = file.FileName;

            var request = new PutObjectRequest
            {
                BucketName = "ishopbucket",
                Key = file.FileName,
                InputStream = memoryStream,
                TagSet = new List<Tag>() { new Tag() { Key="public", Value="yes"} }
            };
            try
            {
                var response = await this.s3Client.PutObjectAsync(request);
                return Results.Ok();
            }
            catch(Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
	}
}

