using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using BookMyShow.Models.Enums.Main;
using BookMyShow.BoundedContext.SqlContext;
namespace BookMyShow.Models.Main
{
    [Table("Otps",Schema="dbo")]
    public partial class Otp
    {
		#region OtpId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion OtpId Annotations

        public int OtpId { get; set; }

		#region Otp Annotations

        [Range(1,int.MaxValue)]
        [Required]
		#endregion Otp Annotations

        public int Otps { get; set; }

		#region MobileNumber Annotations

        [Required]
        [MaxLength(20)]
		#endregion MobileNumber Annotations

        public string MobileNumber { get; set; }


        public Nullable<TimeSpan> OtpDuration { get; set; }


        public Otp()
        {
        }
	}
}