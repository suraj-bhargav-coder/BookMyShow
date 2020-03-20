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
    [Table("Sports",Schema="dbo")]
    public partial class Sport
    {
		#region SportId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion SportId Annotations

        public int SportId { get; set; }

		#region SportPlace Annotations

        [Required]
        [MaxLength(200)]
		#endregion SportPlace Annotations

        public string SportPlace { get; set; }

		#region SportName Annotations

        [Required]
        [MaxLength(50)]
		#endregion SportName Annotations

        public string SportName { get; set; }

		#region SportDate Annotations

        [Required]
		#endregion SportDate Annotations

        public System.DateTimeOffset SportDate { get; set; }

		#region SportTime Annotations

        [Required]
		#endregion SportTime Annotations

        public System.DateTimeOffset SportTime { get; set; }


        public Sport()
        {
        }
	}
}